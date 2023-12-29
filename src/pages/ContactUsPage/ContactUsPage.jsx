import ContactUsDetails from "../../components/ContactUsPageComponents/ContactUsDetails";
import ContactUsForm from "../../components/ContactUsPageComponents/ContactUsForm";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";

const ContactUsPage = () => {
  return (
    <>
      <ContactUsDetails />
      <ContactUsForm />
      {/* <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sri rajyalakshmi complex, nacharam, hansigudaf Oxford&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
      ></iframe> */}
      <FooterComponent />
    </>
  );
};
export default ContactUsPage;
