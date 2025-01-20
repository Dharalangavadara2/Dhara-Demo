
import _, { isArray } from "lodash";


import Colors from "./Colors";
import Snackbar from "react-native-snackbar";






export default {
  showToast(
    message: any,
    duration = 2000,
    type: "danger" | "success" | "warning" = "success"
  ) {
    if (!this.isEmpty(message)) {
      Snackbar.show({
        text: message.toString(),
        duration: duration,
        backgroundColor: type == "danger" ? "#EE3A24" : Colors.PrimaryColor700,
        textColor: Colors.Defaultwhite,
        marginBottom: 16,
      }
      );
    }

  },
 

  showWarningToast(message: string, duration = 4000) {
    this.showToast(message, duration, "warning");
  },

  showErrorToast(message: any, duration = 4000) {
    if (message) this.showToast(message, duration, "danger");
  },

  

  validateEmail(email: string) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  
  
 
  isEmpty(value: any) {
    return _.isEmpty(value);
  },
  isEqual(value: any, value2: any) {
    return _.isEqual(value, value2);
  },
  isDigit(number: any) {
    return /^\d+$/.test(number);
  },
  secondsToHms(d: any, format?: (data: any) => string) {
    let sec_num = parseInt(d);
    let h = Math.floor(sec_num / 3600);
    let m = Math.floor(sec_num / 60) % 60;
    let s = sec_num % 60;
    let day = Math.floor(h / 24);
    let month = Math.floor(day / 30);

    const time = [h, m, s]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
    //  let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return format ? format({ month, day, h, m, s }) : time;
  },

  
    
  
 
  
 

 

};
