import { Image, Text, View } from "react-native";
import Clickable from "../res/styles/Clickable";
import React from "react";
import { FontName } from "../res/styles/FontName";

interface ContactListItemProps {

    selected: boolean
}

const ContactListItem: React.FC<ContactListItemProps> = ({ item }) => {
    console.log("item...", item);
    const dateString = item?.danceStyles?.[0]?.created_at;
const date = new Date(dateString);

// Format it as a human-readable date
const humanDate = date.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
});

    let contactNumber = '';
    if (item.phoneNumbers && item.phoneNumbers.length) {
        //your code here
        contactNumber = item.phoneNumbers[0].number;
    }
    let abc = `${item?.givenName} ${item?.middleName || ""} ${item?.familyName || ""}`
    let filterContacts = abc.split(" ").filter(word => word.trim().length > 0).join(' ');
    return (
        <>

            <View style={{ borderWidth: 0.7, borderColor: "#FFFFFF", borderRadius: 14, backgroundColor: "#FFFFFF", margin: 8, flexDirection: "row" }}>
                <Image
                    style={{ width: 94, height: 104, marginLeft: 8 }}
                    resizeMode="cover"
                    source={{ uri: item?.event_profile_img || '' }}                />

                <View style={{ marginLeft: 3, marginTop: 3 }}>
                    <Text style={{
                        fontFamily: FontName.bold,
                        color: "#181A1F",
                        fontSize: 16
                    }}
                    >{item?.event_name}</Text>
                    <Text style={{ color: "#34A853" }}>{humanDate}</Text>
                    <Text>€{item?.event_price_from} - €{item?.event_price_to}</Text>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                        {
                            item?.danceStyles?.map((data:any) => {
                                return <View style={{ backgroundColor: "#F5F7FC", borderWidth: 0.8, borderRadius: 14, padding: 4, marginTop: 3 }}>
                                <Text style={{
                                    fontSize: 10,
                                    color: "#181A1F"
                                }}>{data?.ds_name}</Text>
    
                            </View>
                            })
                        }
                        
                        {/* <View style={{ backgroundColor: "#F5F7FC", borderWidth: 0.8, borderRadius: 14, padding: 4, marginTop: 3 }}>
                            <Text style={{
                                fontSize: 10,
                                color: "#181A1F"
                            }}>{'Bachata'}</Text>

                        </View>
                        <View style={{ backgroundColor: "#F5F7FC", borderWidth: 0.8, borderRadius: 14, padding: 4, marginTop: 3 }}>
                            <Text style={{
                                fontSize: 10,
                                color: "#181A1F"
                            }}>{'Salsa'}</Text>

                        </View>

                        <View style={{ backgroundColor: "#F5F7FC", borderWidth: 0.8, borderRadius: 14, padding: 4, marginTop: 3 }}>
                            <Text style={{
                                fontSize: 10,
                                color: "#181A1F"
                            }}>{'Bacheta'}</Text>

                        </View> */}
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 8 }}
                            resizeMode="cover"
                            source={require("../res/images/Vector.png")}
                        />
                    </View>
                    <Text style={{ textAlign: "right", color: "#828282" }}>
                        {item?.city},{item?.country}
                    </Text>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>

                            <Image
                                style={{ width: 22, height: 22, marginRight: 8,tintColor:"#1A1A1A" }}
                                resizeMode="cover"
                                source={require("../res/images/shares.png")}
                            />
                        {/* </View> */}
                        {/* <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}> */}

                            <Image
                                style={{ width: 22, height: 20, marginRight: 8,tintColor:"#1A1A1A" }}
                                resizeMode="cover"
                                source={require("../res/images/unselctheart.png")}
                            />
                        </View>


                    </View>
                </View>

            </View>
        </>
    )
}

export default ContactListItem
