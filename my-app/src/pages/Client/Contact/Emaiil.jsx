import emailjs from "emailjs-com";

const sendEmail = async (templateParams) => {
  try {
    
    const serviceId = "service_elbnbuo";
    const templateId = "template_0jng338";
    const userId = "Di7ZCHg7sT6GYwLu_";

    await emailjs.send(serviceId, templateId, templateParams, userId);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
  }
};

export default sendEmail;