export class DateTimeHelper {
  static convertIsoToDateTime(date: string) {
    if(typeof(date != "")) {
      var convertedDate =  new Date(date);
      return convertedDate.toLocaleString('en-GB');
    }
    return null;

  }
}
