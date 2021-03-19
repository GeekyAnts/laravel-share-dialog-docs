import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
const styles = {
  display: "flex",
  width: "100%",
  textAlign: "center",
  fontSize: "medium",
  justifyContent: "center",
};

const CookiePolicy = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} | Share Functionality for Laravel Apps`}
      description="Share Functionality for Laravel Apps"
    >
      <div style={styles}>
        <div className="cookie-policy">
          SahuSoft UK Ltd. and affiliates (collectively, “Geekyants”, “us” or
          “we”) understand that your privacy is important to you and are
          committed to being transparent about the technologies it uses. This
          Cookie Policy explains how and why cookies, and other technologies
          (collectively “Cookies and Other Tracking Technologies”) may be stored
          on and accessed from your device when you use or visit any website or
          app that posts a link to this Policy (collectively, “the Sites”). This
          Cookie Policy should be read together with our Privacy Policy and our
          Terms of use. By continuing to browse or use our Sites, you agree that
          we can store, and access Cookies and Other Tracking Technologies as
          described in this Cookie Policy. What are Cookies and Other Tracking
          Technologies? A cookie is a small text file that can be stored on and
          accessed from your device when you visit one of our Sites, to the
          extent you agree. The other tracking technologies work similarly to
          cookies and place small data files on your devices or monitor your
          website activity to enable us to collect information about how you use
          our Sites. This allows our Sites to recognize your device from those
          of other users of the Sites. The information provided below about
          cookies also applies to these other tracking technologies. How do our
          Sites use Cookies and Other Tracking Technologies? Geekyants uses
          Cookies and Other Tracking Technologies to identify you and your
          interests, to remember your preferences, and to track your use of our
          Sites. We also use Cookies and Other Tracking Technologies to control
          access to certain content on our Sites, protect the Sites, and to
          process any requests that you make of us. To administer our Sites and
          for research purposes, Geekyants may also has contracted with
          third-party service providers to track and analyze statistical usage
          and volume information from our Site users. These third-party service
          providers may use persistent Cookies to help us to improve the user
          experience, manage our Site content, and analyze how users navigate
          and utilize the Sites. First and Third-party Cookies “First party
          Cookies” are cookies that belong to Geekyants and that Geekyants
          places on your device. “Third-party Cookies” are cookies that another
          party place on your device through our Site. Geekyants may contract
          with third-party service providers to send e-mails to users who have
          provided us with their contact information. To help measure and
          improve the effectiveness of our e-mail communications, and/or to
          determine whether messages have been opened and links clicked on, the
          third-party service providers may place Cookies on the devices of
          these users. For more information on how these companies collect and
          use information on our behalf, please refer to their privacy policies
          as indicated below. Persistent Cookies. We use persistent Cookies to
          improve your experience of using the Sites. This includes recording
          your acceptance of our Cookie Policy to remove the cookie message
          which first appears when you use the Sites. Session Cookies. Session
          Cookies are temporary and deleted from your machine when your web
          browser closes. We use session Cookies to help us track internet usage
          as described above. You may refuse to accept browser Cookies by
          activating the appropriate setting on your browser. However, if you
          select this setting you may be unable to access certain parts of the
          Sites. Unless you have adjusted your browser setting so that it will
          refuse Cookies, our system will issue Cookies when you direct your
          browser to our Sites. If you continue browsing the website, you will
          accept cookie use. The data collected by the Sites and/or through
          Cookies that may be placed on your computer will not be kept for
          longer than is necessary to fulfil the purposes mentioned above. In
          any event, such information will not be kept for longer than one year.
          Our Cookies are used for the following purposes: Strictly
          Necessary/Technical: These Cookies are necessary to allow us to
          operate our Sites so you may access them as you have requested. These
          Cookies, for example, let us recognize that you have created an
          account and have logged into that account to access Site content. They
          also include Cookies that enable us to remember your previous actions
          within the same browsing session and secure our Sites.
          Analytical/Performance: These Cookies are used by us or third-party
          service providers to analyze how the Sites are used and how they are
          performing. For example, these Cookies track what pages are most
          frequently visited, and from what locations our visitors come from. If
          you subscribe to a newsletter or otherwise register with the Sites,
          these Cookies may be correlated to you. These Cookies include, for
          example, Google Analytics cookies. Functionality: These Cookies let us
          operate the Sites in accordance with the choices you make. These
          Cookies permit us to "remember" you in-between visits. For instance,
          we will recognize your user name and remember how you customized the
          Sites and services, for example by adjusting text size, fonts,
          languages and other parts of web pages that are alterable, and provide
          you with the same customizations during future visits. Third-Party
          Advertising: These Cookies collect information about your activities
          on these and other sites to provide you targeted advertising. We may
          also allow our third-party service providers to use Cookies on the
          Sites for the same purposes identified above, including collecting
          information about your online activities over time and across
          different websites. The third-party service providers that generate
          these Cookies, such as Adobe, Google, LinkedIn, and Facebook, have
          their own privacy policies, and may use their Cookies to target
          advertising to you on other websites, based on your visit to our
          Sites. How do I refuse or withdraw my consent to the use of Cookies?
          If you do not want Cookies to be dropped on your device, you can
          adjust the setting of your Internet browser to reject the setting of
          all or some Cookies and to alert you when a Cookie is placed on your
          device. Please note that if you use your browser settings to block all
          Cookies (including strictly necessary Cookies) you may not be able to
          access or use all or parts or functionalities of our Sites. If you
          want to remove previously-stored Cookies, you can manually delete the
          Cookies at any time. However, this will not prevent the Sites from
          placing further Cookies on your device unless and until you adjust
          your Internet browser setting as described above. For more information
          on this please write to us at strapui-support@sahusoft.com.
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;