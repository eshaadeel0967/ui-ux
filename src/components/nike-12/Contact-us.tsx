"use client";
import Image from "next/image";
import React from "react";
import dislike from "./dislike.png";
import like from "./like.png";
import { Button } from "../ui/button";
import search from "./search.png";
import cart from "./cart.svg";
import Vector from "./Vector.png";
import wish from "./wish.svg";
import nike from "./nike.png";

import { MdThumbUp } from "react-icons/md";

export const ContactUsPage = (): JSX.Element => {
    return (
        <main className="bg-white flex flex-col items-center w-full">
            <header className="bg-white w-full h-24 relative">
                <div className="bg-neutral-100 h-9 flex items-center justify-between px-12">
                    <Image src={Vector} alt="Logo" />
                    <div className="flex items-center space-x-4 text-xs font-medium text-[#111111]">
                        <span>Find a Store</span>
                        <span>|</span>
                        <span>Help</span>
                        <span>|</span>
                        <span>Join Us</span>
                        <span>|</span>
                        <span>Sign In</span>
                    </div>
                </div>
                <div className=" absolute flex items-center justify-center h-[60px] bg-white">
                    <Image
                        src={nike}
                        alt="logo"
                        className="w-10 h-4 ml-12 "
                    />
                </div>
                <nav className="flex items-center justify-center h-[60px] bg-white">

                    <ul className="flex space-x-8 text-sm font-medium text-[#111111]">
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                        <li>SNKRS</li>
                    </ul>

                    <div className="absolute right-12 flex items-center space-x-4">
                        <div className="relative flex items-center bg-neutral-100 rounded-full px-4 pr-12 py-1">
                            <Image
                                src={search}
                                alt="Search Icon"
                                className="w-6 h-6"
                            />
                            <span className="text-sm text-[#cccccc]">Search</span>
                        </div>
                        <Image
                            src={wish}
                            alt="Wish icon"
                            className="w-6 h-6"
                        />
                        <Image
                            src={cart}
                            alt="Cart Icon"
                            className="w-6 h-6"
                        />
                    </div>
                </nav>

            </header>

            <section className="w-full max-w-[1440px] px-14 py-8">
                <h1 className="text-center text-2xl font-medium text-[#111111]">
                    GET HELP
                </h1>
                <div className="mt-4 flex justify-center">

                    <div className="flex items-center border-2 border-gray-400 rounded-md p-2 w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="What can we help you with?"
                            className="w-full p-2 border-none outline-none"
                        />
                        <button className="ml-2 text-gray-600">
                            <Image
                                src={search}
                                alt="Search Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    <article className="flex-1">
                        <h2 className="text-xl font-medium font-sans text-[#111111]">
                            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                        </h2>
                        <p className="mt-4 text-sm text-[#111111]">
                            We want to make buying your favourite Nike shoes and gear online
                            fast and easy, and we accept the following payment options:
                        </p>
                        <ul className="mt-2 list-none my-6 pl-5 text-sm text-[#111111]">
                            <li className="my-4">Visa, Mastercard, Diners Club, Discover, American Express</li>
                            <li className="my-4">Visa Electron, Maestro</li>
                            <li className="my-4">Apple Pay</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#111111]">
                            <a href="#" className="underline decoration-gray-500 font-semibold">Nike Members</a> can store multiple debit or credit cards in their
                            profile for faster checkout. If you’re not already a Member,{" "}
                            <a href="#" className="underline decoration-gray-500 font-semibold">
                                join us
                            </a>{" "}
                            today.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <Button color="primary" size="default" className="rounded-full">JOIN US</Button>
                            <Button color="primary" size="default" className="rounded-full">SHOP NIKE</Button>
                        </div>
                        <div className="py-6">
                            <h2 className="py-4 font-semibold text-xl">FAQs</h2>
                            <p className="py-4 font-semibold">Does my card need international purchases enabled?</p>
                            <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                            <p className="py-2">Please note, some banks may charge a small transaction fee for international orders.</p>

                            <p className="py-2 font-semibold">Can I pay for my order with multiple method?</p>
                            <p>No, payment for Nike orders can't be split between multiple payment methods.</p>

                            <p className="py-2 pt-6 font-semibold">What payment method is accepted for SNKRS orders?</p>
                            <p>You can use any accepted credit card to pay for your SNKRS order.</p>

                            <p className="py-2 pt-6 font-semibold">Why don't I see Apple Pay as an option?</p>
                            <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                        </div>
                            <p>Was this answer helpful?</p>
                        <div className="flex gap-4">
                            <Image src={like} alt="like icon"/>
                            <Image src={dislike} alt="dislike icon"/>
                        </div>
                        <p className="text-gray-600 py-3">RELATED</p>
                        <p className="p-2 pl-8">
                            <a href="#" className="underline decoration-gray-500 font-medium">WHAT ARE NIKE'S DELIVERY OPTIONS?</a><br/>
                        </p>
                        <p className="p-2 pl-8">
                        <a href="#" className="underline decoration-gray-500 font-medium">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
                        </p>
                    </article>
                    <aside className="w-full lg:w-[300px] border-l-2 p-5 justify-center items-center">
                        <h3 className="text-lg font-semibold text-center text-[#111111]">CONTACT US</h3>
                        <ul className="mt-4 text-center space-y-4 text-sm text-[#111111]">
                            <li>000 800 919 0566</li>
                            <li>Products & Orders: 24 hours a day, 7 days a week</li>
                            <li>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</li>
                        </ul>
                    </aside>
                </div>
            </section>

            <footer className="w-full bg-[#111111] text-white py-8">
                <div className="max-w-[1440px] mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <h4 className="text-sm font-medium">FIND A STORE</h4>
                            <ul className="mt-2 space-y-2 text-xs">
                                <li>Become a Member</li>
                                <li>Sign Up for Email</li>
                                <li>Send Us Feedback</li>
                                <li>Student Discounts</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium">GET HELP</h4>
                            <ul className="mt-2 space-y-2 text-xs">
                                <li>Order Status</li>
                                <li>Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium">ABOUT NIKE</h4>
                            <ul className="mt-2 space-y-2 text-xs">
                                <li>News</li>
                                <li>Careers</li>
                                <li>Investors</li>
                                <li>Sustainability</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-xs">
                        <p>© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </main>
    );
};