import {addDays} from 'date-fns';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date){
    if(Platform.OS === 'ios') {
        // console.log(date)
        // let newDate = addDays(date, 1);
        // console.log(newDate)
        return addDays(date, 1);
    }else {
        return date;
    }
}