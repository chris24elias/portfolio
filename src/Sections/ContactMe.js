import React from "react";

const ContactMe = () => {
  return (
    <section class="section-contact" id="contact">
      <div class="u-center-text u-padding-sml">
        <h2 class="heading-secondary heading-secondary--light u-center-margin u-margin-bottom-small">
          Contact
        </h2>
        <h3 class="heading-tertiary text-white u-margin-bottom-small">
          Have a question or want to work together?
        </h3>
      </div>
      <form class="contact" method="post">
        <input type="hidden" name="form-name" value="form 1" />
        <label class="contact__label" for="name">
          Your name
        </label>
        <input
          aria-label="You name"
          id="name"
          name="name"
          placeholder="First name"
          type="text"
          class="contact__input"
        />
        <label class="contact__label" for="email">
          Your email address
        </label>
        <input
          aria-label="Your email address"
          id="email"
          name="email"
          placeholder="Email address"
          required
          type="email"
          class="contact__input"
        />
        <label class="contact__label" for="message">
          Your message
        </label>
        <textarea
          aria-label="You message"
          id="message"
          name="message"
          placeholder="Message"
          class="contact__textarea"
        ></textarea>
        <button
          class="btn btn--dark contact__btn"
          id="submit"
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
