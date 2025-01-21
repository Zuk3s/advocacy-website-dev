import { Section } from "@/components/Content/Section";
import Icon from "@/components/Buttons/components/Icon";

export default function DropButton() {
  return (
    <Section className="h-[20vh] flex justify-center items-center">
      <Icon
        href="#atuações"
        className="motion-reduce:animate-bounce"
        svg="stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </Icon>
    </Section>
  );
}
