import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const initDelay = tokens.base.durationS;

  const onSubmit = async event => {
    event.preventDefault();

    if (sending) return;

    try {
      setSending(true);

      emailjs.sendForm('service_yejgxk6', 'template_5dtnbcp', form.current, 'V-OhXZW5pgoXJSRY2')
        .then(res => {
          console.log('Email successfully sent:', res);
          setComplete(true);
          setSending(false);
        })
        .catch(err => {
          console.error('There was an error sending the email:', err);
          setSending(false);
        });

    } catch (error) {
      console.error('Error while sending email:', error);
      setSending(false);
    }
  };

  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="aimone.bodini(a_t)gmail.com"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} ref={form} onSubmit={onSubmit}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text="aimone.bodini(a_t)gmail.com"
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {
  /* 
            <Input
              required
              className={styles.input}
              data-status={status}
              name="user_name"
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="name"
              label="Your Name"
              type="text"
              maxLength={512}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              name="user_email"
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your Email"
              type="email"
              maxLength={512}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={4096}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send Message
            </Button>
              */
}

          </form>
        )}
      </Transition>
      <Transition unmount in={complete}>
        {(visible, status) => (
          <div className={styles.complete} aria-live="polite">
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevronRight"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
