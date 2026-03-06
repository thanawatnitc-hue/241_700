const validateData = (userData) => {
    let errors = [];
    if(!userData.firstname){
        errors.push('กรุณากรอกชื่อ');
    }
    if(!userData.lastname){
        errors.push('กรุณากรอกนามสกุล');
    }
    if(!userData.age){
        errors.push('กรุณากรอกอายุ');
    }
    if(!userData.gender){
        errors.push('กรุณาเลือกเพศ');
    }
    if(!userData.interests){
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    if(!userData.description){
        errors.push('กรุณากรอกคำอธิบาย')
    }
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name="firstname"]');
    let lastNameDOM = document.querySelector('input[name="lastname"]');
    let ageDOM = document.querySelector('input[name="age"]');
    let genderDOM = document.querySelector('input[name="gender"]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name="interests"]:checked') || {};
    let descriptionDOM = document.querySelector('textarea[name="description"]');

    let messageDOM = document.getElementById('message');

    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i !== interestDOMs.length - 1) {
                interest += ', '
            }
        }

        let userData = {
            firstname: firstNameDOM.value,
            lastname: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }
        console.log('submitData', userData)

        const errors = validateData(userData);
        if(errors.length > 0){
            messageDOM.innerText = errors.join(', ');
            messageDOM.className = 'message danger';
            return;
        }

        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';
    } catch (error) {
        console.log('Error message', error.message);
        console.log('Error details', error.errors);
        }

        let htmlData = '<div>';
        htmlData += '<div>' + error.message + '</div>';
        htmlData += '</div>';
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += '<div>' + error.errors[i].message + '</div>';
        }

        messageDOM.innerText = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        messageDOM.className = 'message danger'
    }
