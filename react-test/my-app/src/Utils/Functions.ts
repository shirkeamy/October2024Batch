export const onContactSubmit = (emailId: string, password: string) => {

    localStorage.setItem("EmailId",emailId);
    localStorage.setItem("Password",password);
    window.location.replace("user-details");

}