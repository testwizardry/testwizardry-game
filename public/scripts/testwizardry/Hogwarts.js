import {Person} from './Person.js';

function admissions(person)
{
    let response = {
        applicant: person,
        accepted: undefined,
        reason: undefined
    }

    if (! person instanceof Person)
    {
        console.error("invalid person");
        response.reason = "invalid application"
        response.accepted = false;

        return response;
    }

    if (person.magical != true)
    {
        response.reason = "You must be a wizard to attend";
        response.accepted = false;
        return response
    }


    if (person.age != 11)
    {
        response.reason = "You must be 11 years old to enroll",
        response.accepted = false;

        return response;
    }


    response.accepted = true;

    return response;
}

export {admissions}