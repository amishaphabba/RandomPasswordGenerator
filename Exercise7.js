// Password generator

// targeting necessary HTML elements 
let passwordSpace = document.getElementById("password")
let lenInput = document.getElementById("length")

// creating strings
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digits = "0123456789"
const specialChar = "!@#$%^&*(){}[]=<>/,."
const alpha = alphaLower + alphaUpper


// class for password generation
class Password {

    // methods to generate particular password types
    createWeakPassword() {
        let len = lenInput .value
        if (len < 4) {
            alert("min length should be 4")
            return "0"
        }
        else {
            let finalPass = ""

            finalPass += alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
            finalPass += alphaLower[Math.floor(Math.random() * alphaLower.length)]
            while (finalPass.length < len) {
                finalPass += alpha[Math.floor(Math.random() * alpha.length)]
            }
            return finalPass.slice(0, len)
        }

    }

    createBasicPassword() {
        let len = lenInput .value

        if (len < 6) {
            alert("min length should be 6")
            return "0"
        }

        else {
            let finalPass = ""
            finalPass += alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
            finalPass += alphaLower[Math.floor(Math.random() * alphaLower.length)]
            while (finalPass.length < len) {
                finalPass += alpha[Math.floor(Math.random() * alpha.length)]
                finalPass += digits[Math.floor(Math.random() * digits.length)]
            }
            return finalPass.slice(0, len)
        }
    }

    createStrongPassword() {
        let len = lenInput .value

        if (len < 8 || len > 12) {
            alert("min length should be 8 and max 12")
            return "0"
        }

        else {
            let finalPass = ""
            finalPass += alphaUpper[Math.floor(Math.random() * alphaUpper.length)]
            finalPass += alphaLower[Math.floor(Math.random() * alphaLower.length)]
            while (finalPass.length < len) {
                finalPass += alpha[Math.floor(Math.random() * alpha.length)]
                finalPass += digits[Math.floor(Math.random() * digits.length)]
                finalPass += specialChar[Math.floor(Math.random() * specialChar.length)]
            }
            return finalPass.slice(0, len)
        }
    }
}


// functions for calling password class methods [eg - createWeakPassword is called using WeakPass function]

function WeakPass() {
    newObj = new Password()
    let pass = newObj.createWeakPassword()
    if (pass == 0) {
        passwordSpace.innerHTML = `<p>Couldn't generate your password</p>`
        // to bring back focus to input field
        lenInput.focus()
    }
    else {
        passwordSpace.innerHTML = `<p>Here goes your password\n ${pass}</p>`
        lenInput.focus()
    }
}


function BasicPass() {
    newObj = new Password()
    let pass = newObj.createBasicPassword()
    if (pass == 0) {
        passwordSpace.innerHTML = `<p>Couldn't generate your password</p>`
        lenInput.focus()
    }
    else {
        passwordSpace.innerHTML = `<p>Here goes your password\n ${pass}</p>`
        lenInput.focus()
    }
}

function StrongPass() {
    newObj = new Password()
    let pass = newObj.createStrongPassword()
    if (pass == 0) {
        passwordSpace.innerHTML = `<p>Couldn't generate your password</p>`
        lenInput.focus()
    }
    else {
        passwordSpace.innerHTML = `<p>Here goes your password\n ${pass}</p>`
        lenInput.focus()

     
    }
}


