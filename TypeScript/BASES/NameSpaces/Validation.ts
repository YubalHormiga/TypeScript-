namespace Validations {

    export const validateText = (text: String): Boolean => {
        return (text.length > 3) ? true : false
    }

    export const validateDate = (myDate: Date): Boolean => {
        return (isNaN(myDate.valueOf())) ? false : true
    }
}

console.log(Validations.validateText('Yub'))