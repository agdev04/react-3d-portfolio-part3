import { useForm, ValidationError } from "@formspree/react";
import { useScroll } from "@react-three/drei";
import Section from "./Section";

export default function ContactSection(props) {
  const { section, menuOpened } = props;
  const [state, handleSubmit] = useForm("mnnalkpw");
  const data = useScroll();

  let curSection = Math.floor(data.scroll.current * data.pages);
  console.log("curSection interface: ", curSection);

  return (
    <Section>
      <div
        className={`flex ${
          curSection >= 3 && menuOpened ? "justify-start" : "justify-end"
        }`}
      >
        <div className="p-5 rounded-xl bg-white w-[40%]">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center text-[#5356FF]">Contact</h1>
            {state.succeeded && (
              <div className="p-3 bg-white rounded-xl">
                <h1 className="text-2xl text-center text-[#5356FF]">
                  Thank you for contacting me!
                </h1>
              </div>
            )}
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                className="p-3 border border-indigo-500 rounded-xl"
              />
              <ValidationError
                className="text-red-500"
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                className="p-3 border border-indigo-500 rounded-xl"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                className="p-3 border border-indigo-500 rounded-xl"
                rows={3}
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <button
              disabled={state.submitting}
              type="submit"
              className="px-8 py-3 text-white bg-indigo-500 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
