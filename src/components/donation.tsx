"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button, Container, Input, Title } from "./ui";

interface Props {
  className?: string;
}

const currencies = ["RUB", "EUR", "AMD", "USD"];
const bankDetails = [
  {
    name: "INECOBANK AMD",
    numbers: "2052822317811001",
  },
  {
    name: "USD 20528223171811020",
    numbers: "SWIFT CODE: INJSAM22",
  },
  {
    name: "EUR 2052822317811040",
    numbers: "SWIFT CODE: INJSAM22",
  },
  {
    name: "RUB 2052822317811041",
    numbers: "",
  },
  {
    name: "«Այդի Բանկ» ՓԲԸ",
    numbers: "Հ/Հ՝ 11817094623000",
  },
];

const DonationForm = () => (
  <form className="w-full max-w-[720px] space-y-4">
    <Title text="ԿԱՏԱՐԵԼ ՆՎԻՐԱՏՎՈՒԹՅՈՒՆ" size="n" />

    <ul className="flex flex-wrap gap-3">
      {currencies.map((cur) => (
        <li
          key={cur}
          className="w-[74px] h-[48px] rounded-[6px] border border-[rgba(168,168,168,0.42)] bg-white shadow-sm flex justify-center items-center text-[16px] text-[#666]"
        >
          {cur}
        </li>
      ))}
    </ul>

    <Input
      className="h-[62px] text-[21px]"
      type="number"
      placeholder="Գումար"
      required
    />

    <div className="flex flex-col md:flex-row gap-4">
      <Input
        className="h-[62px] text-[21px] w-full"
        type="text"
        placeholder="Անուն Ազգանուն"
        required
      />
      <Input
        className="h-[62px] text-[21px] w-full"
        type="email"
        placeholder="Էլ-փոստ"
        required
      />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
      <div className="flex flex-col text-[22px] text-[#585858] tracking-[0.03em] leading-[107%]">
        Քարտային փոխանցում
        <span className="text-[19px] text-[#585858CC] tracking-[0.04em] leading-[123%]">
          Վճարիր քո բանկային քարտով
        </span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3].map((n) => (
          <img key={n} src={`/card${n}.png`} alt={`card${n}`} />
        ))}
      </div>
    </div>

    <Input
      className="h-[62px] text-[21px]"
      type="text"
      placeholder="Քարտի համար"
      required
    />

    <div className="flex flex-col md:flex-row gap-4">
      <Input
        className="h-[62px] text-[21px] w-full"
        type="text"
        placeholder="MM/YY"
        required
      />
      <Input
        className="h-[62px] text-[21px] w-full"
        type="text"
        placeholder="CVV"
        required
      />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 my-8">
      <button className="flex-1 h-[55px] rounded-[7px] bg-black flex justify-center items-center">
        <img src="./idBankLogo1.png" alt="logo1" />
      </button>
      <button className="flex-1 h-[55px] border border-[#e5e5e5] rounded-[7px] flex justify-center items-center">
        <img src="./idBankLogo2.png" alt="logo2" />
      </button>
    </div>

    <div className="flex gap-2 items-start my-4">
      <input type="checkbox" name="checkbox" />
      <p className="flex flex-col text-[15px] leading-[143%]">
        Բաժանորդագրվել որպես ԱՄԵՆԱՄՅԱ նվիրաբերող
        <span className="text-primary underline leading-[143%]">
          Գազտնիության Քաղաքականություն
        </span>
        <span className="leading-[183%]">Վճարման պայմանները</span>
      </p>
    </div>

    <Button className="w-fit py-8 text-[16px] leading-[150%]">
      ԿԱՏԱՐԵԼ ՆՎԻՐԱՏՎՈՒԹՅՈՒՆ
    </Button>
  </form>
);

export const Donation: React.FC<Props> = ({ className }) => (
  <div className={cn("max-w-[1920px] mx-auto", className)}>
    <div className="bg-[url(/donation.png)] bg-cover h-[240px]">
      <div className="max-w-[1680px] mx-auto bg-center bg-cover h-[240px] px-4 pt-28 pb-10 bg-no-repeat flex items-center">
        <Title
          className="font-bebas leading-[125%] text-white text-center sm:text-left"
          size="n"
          text="ՆՎԻՐԱԲԵՐՈՒԹՅՈՒՆ"
        />
      </div>
    </div>

    <Container className="max-w-[1620px] p-4 sm:p-10 lg:p-16 flex flex-col lg:flex-row gap-12 lg:justify-between">
      <DonationForm />

      <ul className="space-y-4 w-full max-w-[620px] text-sm">
        <div className="space-y-4">
          {bankDetails.map((item, i) => (
            <li key={i} className="flex flex-col">
              <span>{item.name}</span>
              <span>{item.numbers}</span>
            </li>
          ))}
        </div>

        <li className="mt-6 leading-relaxed">
          Մեծ նպատակի հասնելու համար պետք է սկսել փոքր քայլերից։ Սիրելի
          հայրենակից, մենք առաջնորդվում ենք հենց այդ սկզբունքով, և կատարելով
          նվիրատվություն՝ Դուք մասնակից եք դառնում Արարատյան արժեքների տարածմանը
          և հայ ազգային գաղափարախոսական ծրագրերի և նպատակների իրագործմանը։ Ձեր
          ներդրած յուրաքանչյուր դրամը մեծ նշանակություն ունի։ Այն օգտագործվում է
          մեր հռչակած կրթական և ռազմավարական ծրագրերի իրականացման, դրանց
          գործնականում կիրառության համար, ինչի մասին պարբերաբար հանդես ենք գալիս
          հաշվետվություններով։
        </li>
      </ul>
    </Container>
  </div>
);
