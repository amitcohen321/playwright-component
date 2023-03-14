/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import App from "../src/components/App/App";
import Form from "../src/components/Form/Form";
import CharacterModal from "../src/components/CharacterModal/CharacterModal";
import Character from "../src/components/Character/Character";
var sinon = require("sinon");

const data = [
  {
    id: 6058,
    uid: "21af6be0-74ae-4a82-ac8a-73510994d5d0",
    password: "70LX6zIUu5",
    first_name: "Almeda",
    last_name: "Hoppe",
    username: "almeda.hoppe",
    email: "almeda.hoppe@email.com",
    avatar: "https://robohash.org/voluptasnullafuga.png?size=300x300&set=set1",
    gender: "Bigender",
    phone_number: "+1-670 443-072-6964 x4246",
    social_insurance_number: "226675494",
    date_of_birth: "1987-12-24",
    employment: {
      title: "Future Design Associate",
      key_skill: "Proactive",
    },
    address: {
      city: "Oberbrunnermouth",
      street_name: "Britt Park",
      street_address: "275 Bobbie Creek",
      zip_code: "21197",
      state: "New York",
      country: "United States",
      coordinates: {
        lat: 33.06567477650182,
        lng: -35.73475212309626,
      },
    },
    credit_card: {
      cc_number: "4566-1837-0216-4460",
    },
    subscription: {
      plan: "Gold",
      status: "Active",
      payment_method: "Visa checkout",
      term: "Monthly",
    },
  },
  {
    id: 7794,
    uid: "63b31574-20e1-45d3-85d8-6cd7b1183661",
    password: "n5OLb2ZIlf",
    first_name: "Michal",
    last_name: "Larkin",
    username: "michal.larkin",
    email: "michal.larkin@email.com",
    avatar:
      "https://robohash.org/recusandaeplaceatimpedit.png?size=300x300&set=set1",
    gender: "Genderqueer",
    phone_number: "+258 (327) 221-7467 x2510",
    social_insurance_number: "622363067",
    date_of_birth: "1969-06-08",
    employment: {
      title: "Design Facilitator",
      key_skill: "Confidence",
    },
    address: {
      city: "Maryettahaven",
      street_name: "Kyoko Passage",
      street_address: "2028 Schmitt Mission",
      zip_code: "31020-5892",
      state: "Minnesota",
      country: "United States",
      coordinates: {
        lat: -85.50375864383915,
        lng: 40.230783172395036,
      },
    },
    credit_card: {
      cc_number: "4879-5186-4943-5535",
    },
    subscription: {
      plan: "Gold",
      status: "Blocked",
      payment_method: "Apple Pay",
      term: "Annual",
    },
  },
  {
    id: 5163,
    uid: "9d67515c-e150-4b76-b580-0302c55db7ea",
    password: "RaWjyiASdt",
    first_name: "Evette",
    last_name: "Conroy",
    username: "evette.conroy",
    email: "evette.conroy@email.com",
    avatar: "https://robohash.org/dolorespariaturin.png?size=300x300&set=set1",
    gender: "Non-binary",
    phone_number: "+43 (863) 974-2365 x569",
    social_insurance_number: "700869001",
    date_of_birth: "1998-02-15",
    employment: {
      title: "Advertising Facilitator",
      key_skill: "Organisation",
    },
    address: {
      city: "Towandastad",
      street_name: "Dietrich Stream",
      street_address: "8351 Florencia Point",
      zip_code: "00675",
      state: "Idaho",
      country: "United States",
      coordinates: {
        lat: -20.589784125922705,
        lng: 162.21790583086846,
      },
    },
    credit_card: {
      cc_number: "5474-0196-2219-5937",
    },
    subscription: {
      plan: "Diamond",
      status: "Blocked",
      payment_method: "Debit card",
      term: "Annual",
    },
  },
  {
    id: 2479,
    uid: "3ca40a36-dce7-4a9e-a481-098e5b333839",
    password: "FthyAs5k09",
    first_name: "Matt",
    last_name: "Sauer",
    username: "matt.sauer",
    email: "matt.sauer@email.com",
    avatar:
      "https://robohash.org/voluptasdoloribusdeserunt.png?size=300x300&set=set1",
    gender: "Genderfluid",
    phone_number: "+1-787 1-775-943-1379",
    social_insurance_number: "631288719",
    date_of_birth: "1958-03-20",
    employment: {
      title: "Dynamic Accounting Orchestrator",
      key_skill: "Fast learner",
    },
    address: {
      city: "East Scot",
      street_name: "Cassin Knolls",
      street_address: "94984 Marvin Flats",
      zip_code: "68650-0561",
      state: "Rhode Island",
      country: "United States",
      coordinates: {
        lat: -28.910109618016953,
        lng: -102.9600958981404,
      },
    },
    credit_card: {
      cc_number: "4419534152887",
    },
    subscription: {
      plan: "Essential",
      status: "Active",
      payment_method: "Visa checkout",
      term: "Monthly",
    },
  },
];

test("tests check", () => {
  expect(true).toBe(true);
});

test("validate app renders with disabled buttons", async ({ mount }) => {
  // Arrange & Assert
  const component = await mount(<App />);
  await expect(component).toContainText("Cheqbot");

  const buttonStartGame = await component.getByRole("button", {
    name: /^Start Game$/i,
  });
  await expect(buttonStartGame).toBeDisabled();

  const buttonAllow = await component.getByRole("button", { name: /Allow/i });
  await expect(buttonAllow).toBeDisabled();

  const buttonBlock = await component.getByRole("button", { name: /Block/i });
  await expect(buttonBlock).toBeDisabled();
});

test("validates name form works", async ({ mount }) => {
  // Arrange
  const component = await mount(<Form />);

  // Act
  await component.getByLabel("Name").fill("Amit Cohen");
  await component.getByRole("button", { name: /OK/i }).click();

  // Assert
  const elementToValidate = await component.getByTestId("your-name");
  expect(await elementToValidate.innerText()).toContain("Amit Cohen");
});

test("validate current character image is populated on ui when chosen", async ({
  page,
  mount,
}) => {
  // Arrange
  await page.route("**/users*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  });
  const component = await mount(<App />);

  // Act
  await component.getByText("Choose your Character").click();
  await page.getByRole("img").nth(0).click();

  // Assert
  await expect(page.getByAltText("current-character-avatar")).toBeVisible();
});

test("validate charactermodal renders 4 characters", async ({
  page,
  mount,
}) => {
  // Arrange

  await page.route("**/users*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  });
  const component = await mount(<App />);

  // Act
  await component
    .getByRole("heading", { name: "Choose your Character" })
    .click();

  // Assert
  expect(await page.getByRole("img").count()).toEqual(4);
});

test.only("configure context through hooks config", async ({ page, mount }) => {
  await page.route("**/users*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  });

  const component = await mount(<CharacterModal />, {
    hooksConfig: {
      overrides: {
        setCurrentCharacter: undefined,
        setIsCharacterModalOpen: undefined,
      },
    },
  });

  expect(await component.getByRole("img").count()).toEqual(4);
});

test.skip("validate charactermodal renders 4 characters - test", async ({
  page,
  mount,
}) => {
  // Arrange
  await page.route("**/users*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  });

  const stub = sinon.stub();
  const handleCharacterChosen = sinon.replace(
    handleCharacterChosen,
    "handleCharacterChosen",
    stub
  );

  await page.pause();
  const component = await mount(<CharacterModal />);
  await page.pause();

  // Assert
  expect(await component.getByRole("img").count()).toEqual(4);
});

test.skip("validate CharacterModal", async ({ page, mount }) => {
  // const setCurrentCharacter = () => {};
  // const setIsCharacterModalOpen = () => {};
  // const setCurrentCharacterMocked = sinon.stub("setCurrentCharacter").callsFake(() => {});
  // const setIsCharacterModalOpenMocked = sinon.stub("setCurrentCharacter").callsFake(() => {});

  // const setCurrentCharacter = jest.fn();
  // const setIsCharacterModalOpen = jest.fn();

  // const setCurrentCharacter = (): void => {};
  // const setIsCharacterModalOpen = (): void => {};

  // const setIsCharacterModalOpen = (isCharacterModalOpen: boolean): void => {};

  const AppContext = React.createContext<any>(null);
  await page.route("**/users*", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(data),
    });
  });

  const component = await mount(
    <AppContext.Provider
      value={{ setCurrentCharacterMocked, setIsCharacterModalOpenMocked }}
    >
      <CharacterModal />
    </AppContext.Provider>
  );

  expect(await component.getByRole("img").count()).toEqual(4);
});
