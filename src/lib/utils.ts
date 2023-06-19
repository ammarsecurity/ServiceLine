import * as yup from "yup";
import * as _ from "lodash";

function createNullableDateSchema(
  requiredMessage: string,
  otherFieldName: string
) {
  return yup.string().when(otherFieldName, (otherFieldValue, schema) => {
    const shouldRequire = !_.isEmpty(otherFieldValue[0]);
    return shouldRequire
      ? schema.required(requiredMessage).nullable()
      : schema.nullable();
  });
}
function convertDatesTimeToDateFromObj(obj: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === "object") {
        // recursively check nested objects
        convertDatesTimeToDateFromObj(value);
      } else if (
        typeof value === "string" &&
        value.includes("T") &&
        value.includes(":")
      ) {
        // convert date strings
        obj[key] = value.split("T")[0];
      }
    }
  }
}
export { createNullableDateSchema, convertDatesTimeToDateFromObj };
