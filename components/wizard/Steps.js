import {
  WizardButton,
  WizardContent,
  WizardTitle,
  WizardInput,
  WizardPreheader,
  WizardLabel,
} from "./elements";

import IndexPage from "../../pages/index";
import ArrowIcon from "../ArrowIcon";
import RecapBar, { FontSwitcher, ThemeSwitcher } from "./RecapBar";

export function Step1({ onClickNext, step }) {
  return (
    <WizardContent step={step}>
      <WizardTitle>Create new blog</WizardTitle>
      <p className="mb-8 text-xl text-gray-800 dark:text-white">
        Something has always existed. According to physics, there can never be
        true physical nothingness—though there can be times when existence
        resembles nothing.
      </p>
      <WizardButton
        as="a"
        href={`/wizard?step=${step + 1}`}
        onClick={onClickNext}
        icon={<ArrowIcon color="text-white" />}
      >
        Continue
      </WizardButton>
    </WizardContent>
  );
}

export function Step2({ onClickNext, step, data, handleInput }) {
  return (
    <WizardContent step={step}>
      <WizardPreheader>Welcome to the wizard</WizardPreheader>
      <WizardTitle>Fill in some content</WizardTitle>
      <form onSubmit={onClickNext} className="grid gap-y-6">
        <WizardInput
          label="Name"
          type="text"
          placeholder="Jay Doe"
          name="name"
          id="name"
          value={data["name"]}
          onChange={handleInput}
          required="required"
        />
        <WizardInput
          label="Blog Title"
          type="text"
          placeholder="My blog"
          id="blogTitle"
          name="blogTitle"
          value={data["blogTitle"]}
          onChange={handleInput}
          required
        />
        <WizardInput
          label="Footer Text"
          type="text"
          placeholder="All rights reserved."
          id="footerText"
          name="footerText"
          value={data["footerText"]}
          onChange={handleInput}
        />

        <WizardButton icon={<ArrowIcon color="text-white" />} type="submit">
          Continue
        </WizardButton>
      </form>
    </WizardContent>
  );
}

export function Step3({ onClickNext, step, data, setData }) {
  return (
    <WizardContent step={step}>
      <WizardPreheader>Howdy, {data.name}</WizardPreheader>
      <WizardTitle>Choose your vibe</WizardTitle>
      <div className="mb-8">
        <WizardLabel>Color scheme</WizardLabel>
        <ThemeSwitcher open variant="horizontal" setData={setData} />
      </div>
      <WizardButton
        onClick={onClickNext}
        icon={<ArrowIcon color="text-white" />}
      >
        Continue
      </WizardButton>
    </WizardContent>
  );
}

export function Step4({ onClickNext, step, data, setData }) {
  return (
    <WizardContent step={step}>
      <WizardPreheader>Howdy, {data.name}</WizardPreheader>
      <WizardTitle>Choose fonts</WizardTitle>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <WizardLabel>Headings</WizardLabel>
          <FontSwitcher
            cssVariable="--font-primary"
            data={data}
            setData={setData}
          />
        </div>
        <div>
          <WizardLabel>Paragraphs</WizardLabel>
          <FontSwitcher
            cssVariable="--font-secondary"
            data={data}
            setData={setData}
          />
        </div>
      </div>
      <WizardButton
        as="a"
        href={`/wizard?step=${step + 1}`}
        onClick={onClickNext}
        icon={<ArrowIcon color="text-white" />}
      >
        Continue
      </WizardButton>
    </WizardContent>
  );
}

export function Step5({ posts, data, setData, handleInput }) {
  return (
    <div>
      <IndexPage globalData={data} posts={posts} />
      <RecapBar data={data} setData={setData} handleInput={handleInput} />
    </div>
  );
}