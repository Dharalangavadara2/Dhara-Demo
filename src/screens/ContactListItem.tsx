import { Image, Text, View, StyleSheet } from "react-native";
import React from "react";
import { FontName } from "../res/styles/FontName";
import Clickable from "../res/styles/Clickable";

// Define the shape of the new props
interface ContactListItemProps {
    item: {
        title: string;
        authors: Array<{ first_name: string; last_name: string; dob: string; dod: string }>;
        copyright_year: string;
        description: string;
        totaltime: string;
        url_librivox: string;
        url_text_source: string;
        // Add any other fields you need from the API
    };
    onPress: (data: any) => void,
    selected: boolean;
}

const ContactListItem: React.FC<ContactListItemProps> = ({ item,onPress}) => {
    // Format the author's name
    const authorName = item?.authors?.map((author) => `${author.first_name} ${author.last_name}`).join(', ');

    // Get birth and death years for the author
    const authorDob = item?.authors?.[0]?.dob;
    const authorDod = item?.authors?.[0]?.dod;
    const totalTime = item?.totaltime ?? '00:00:00';

    return (
        <View style={styles.container}>
                    <Clickable onPress={() => onPress(item)} >

            <View style={styles.authorInfoContainer}>
                {/* Author's Name */}
                <Text style={styles.authorName}>{authorName}</Text>
                
                {/* Author's Birth and Death Year */}
                <Text style={styles.authorDetails}>
                    Born: {authorDob} - Died: {authorDod}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item?.title}</Text>

                {/* Copyright year */}
                <Text style={styles.copyright}>{`Copyright Year: ${item?.copyright_year}`}</Text>

                {/* Display total time */}
                <Text style={styles.time}>{`Total Time: ${totalTime}`}</Text>
            </View>

            <View style={styles.rightSection}>
                <View style={styles.iconContainer}>
                    {/* Example Icon (can be used for sharing or other actions) */}
                    <Image
                        style={styles.icon}
                        resizeMode="cover"
                        source={require("../res/images/Vector.png")} // Example icon
                    />
                </View>
                {/* LibriVox URL (optional, you can link it directly) */}
                <Text style={styles.url}>
                    <Text>{item?.url_librivox}</Text>
                </Text>
            </View>
            </Clickable>
        </View>
    );
};

// Responsive styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 0.7,
        borderColor: "#FFFFFF",
        borderRadius: 14,
        backgroundColor: "#FFFFFF",
        margin: 8,
        flexDirection: "row",
        flexWrap: 'wrap', // Allow wrapping for better responsiveness
        padding: 10,
    },
    authorInfoContainer: {
        width: 94,
        height: 104,
        marginLeft: 8,
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Light grey background for author info section
        borderRadius: 14,
    },
    authorName: {
        fontFamily: FontName.bold,
        color: "#181A1F",
        fontSize: 14,
        textAlign: "center",
        flexWrap: 'wrap', // Ensure name wraps if too long
    },
    authorDetails: {
        color: "#828282",
        fontSize: 12,
        marginTop: 5,
        textAlign: "center",
    },
    infoContainer: {
        flex: 1,
        marginLeft: 3,
        marginTop: 3,
    },
    title: {
        fontFamily: FontName.bold,
        color: "#181A1F",
        fontSize: 16,
        flexWrap: 'wrap', // Ensure that the text wraps if it's too long
        width: '80%',
    },
    copyright: {
        color: "#828282",
        fontSize: 12,
        marginTop: 5,
    },
    time: {
        color: "#828282",
        fontSize: 12,
        marginTop: 5,
    },
    rightSection: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flex: 0.3, // Limit width to a certain percentage to ensure space for text
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    url: {
        color: "#828282",
        fontSize: 10,
        textAlign: "right",
        marginTop: 8,
    },
});

export default ContactListItem;
