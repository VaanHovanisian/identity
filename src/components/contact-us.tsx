import React from "react";
import { cn } from "@/lib/utils";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Container,
  Input,
  Title,
} from "./ui";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

interface Props {
  className?: string;
}

export const ContactUs: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("max-w-[1920px] mx-auto", className)}>
      <div className="bg-[url(/contact-us.png)] bg-cover h-[240px]">
        <div className="max-w-[1680px] mx-auto text-start pt-17">
          <Title
            className="font-bebas leading-[125%] text-white "
            size={"l"}
            text={"ԿԱՊ"}
          />
        </div>
      </div>
      <Container className="p-16 flex flex-wrap gap-6 justify-center">
        <Card className="w-full max-w-sm">
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Անուն Ազգանուն"
                    required
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Էլ-փոստ"
                    required
                  />
                  <Input
                    id="name"
                    type="tel"
                    placeholder="+374 00 000 000"
                    required
                  />
                  <Input id="name" type="text" placeholder="Թեմա" required />
                  <Input
                    className=" h-[88px]"
                    id="name"
                    type="text"
                    placeholder="Նամակ"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardContent>
            <div className="flex flex-col gap-6">
              <span>
                Նոր առաջարկների, հանգանակության, համագործակցության և այլ
                հարցերով կապվեք մեզ հետ նշված հեռախոսահամարով, էլ․-փոստով, կամ
                լրացրեք հայտը։
              </span>
              <ul className="flex flex-col gap-4">
                <hr className="w-[320px] " />
                <li className=" flex items-center gap-2.5 text-xs font-medium leading-[133%] tracking-[0.04em]">
                  <Phone size={21} />
                  <a href="tel:+37400000000">+374 00 000-000</a>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium leading-[133%] tracking-[0.04em]">
                  <Mail size={21} />
                  <a href="mailto:gagikidentity@gmail.com">
                    gagikidentity@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium leading-[133%] tracking-[0.04em]">
                  <MapPin size={21} />
                  <a>RA, Yerevan, Road 00</a>
                </li>
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]">
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7074 15.0385L9.94174 7.55413L14.6074 2.42209C14.7711 2.23755 14.8555 1.99592 14.8422 1.74958C14.8289 1.50324 14.7191 1.27206 14.5366 1.10614C14.354 0.940231 14.1134 0.852964 13.8669 0.863262C13.6204 0.87356 13.388 0.980593 13.2199 1.16116L8.90189 5.91428L5.95736 1.2885C5.87274 1.15545 5.75593 1.04589 5.61773 0.969968C5.47953 0.894042 5.32442 0.854199 5.16674 0.854126H1.41674C1.2488 0.854203 1.08397 0.899391 0.939466 0.984964C0.794965 1.07054 0.676103 1.19336 0.595305 1.34058C0.514508 1.4878 0.47474 1.65403 0.48016 1.82188C0.48558 1.98973 0.535987 2.15305 0.626114 2.29475L5.39174 9.77913L0.722989 14.9112C0.638458 15.002 0.57279 15.1086 0.529791 15.225C0.486792 15.3414 0.467318 15.4651 0.472497 15.5891C0.477676 15.713 0.507405 15.8347 0.559961 15.9471C0.612517 16.0595 0.686855 16.1603 0.778666 16.2437C0.870477 16.3272 0.977935 16.3916 1.09481 16.4332C1.21169 16.4748 1.33566 16.4928 1.45954 16.4861C1.58342 16.4794 1.70475 16.4482 1.81649 16.3943C1.92823 16.3404 2.02816 16.2649 2.11049 16.1721L6.43158 11.419L9.37611 16.0448C9.46074 16.1778 9.57755 16.2874 9.71575 16.3633C9.85394 16.4392 10.0091 16.4791 10.1667 16.4791H13.9167C14.0847 16.479 14.2495 16.4339 14.394 16.3483C14.5385 16.2627 14.6574 16.1399 14.7382 15.9927C14.819 15.8454 14.8587 15.6792 14.8533 15.5114C14.8479 15.3435 14.7975 15.1802 14.7074 15.0385ZM10.6816 14.6041L3.12455 2.72913H4.6519L12.2089 14.6041H10.6816Z"
                        fill="#781214"
                      />
                    </svg>
                  </span>
                  <span className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]">
                    <Instagram
                      className="align-middle"
                      color="#781214"
                      size={18}
                      strokeWidth={3}
                    />
                  </span>
                  <span className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]">
                    <Facebook
                      className="align-middle"
                      color="#781214"
                      size={18}
                      strokeWidth={3}
                    />
                  </span>
                  <span className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]">
                    <Linkedin
                      className="align-middle"
                      color="#781214"
                      size={18}
                      strokeWidth={3}
                    />
                  </span>
                  <span className="inline-flex items-center justify-center w-[33px] h-[33px] border-[1.5px] border-primary rounded-[3px]">
                    <Youtube
                      className="align-middle"
                      color="#781214"
                      size={18}
                      strokeWidth={3}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
