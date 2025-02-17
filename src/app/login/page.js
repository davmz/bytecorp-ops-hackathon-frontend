"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

import emailIcon from "../../../images/email.png";
import passwordIcon from "../../../images/password.png";
import logo from "../../../images/bytecorp_ops_logo.jpg";
import loginIllustration from "../../../images/login_illustration.png";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-evenly p-4 gap-x-2">
            <div className="hidden lg:block">
                <Image
                    src={loginIllustration}
                    alt="Login illustration"
                    width={460}
                    height={460}
                    priority
                />
            </div>

            <div className="w-full max-w-[760px] bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex items-center gap-4 mb-12">
                    <Image
                        src={logo}
                        alt="ByteCorp Ops Logo"
                        width={85}
                        height={85}
                        className="rounded-full"
                    />

                    <h2 className="text-black font-poppins font-bold text-[36px] leading-[54px]">
                        ByteCorp Ops
                    </h2>
                </div>

                <h1 className="text-black font-poppins font-bold text-[36px] leading-[54px] mb-8">
                    Nice to see you again
                </h1>

                <form className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={setEmail}
                        icon={emailIcon}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={setPassword}
                        icon={passwordIcon}
                        showPasswordToggle
                    />

                    <div className="flex justify-between items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-[18px] h-[18px] rounded bg-[#ececec] border border-[#d9d9d9]"
                            />

                            <span className="text-[#2f2f2f] font-poppins text-base">
                                Remember me
                            </span>
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-[#6358dc] font-poppins text-base"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[77px] bg-[#091540] text-white font-poppins font-semibold text-base rounded-lg"
                    >
                        Login
                    </button>
                    
                    <p className="text-center font-sans text-base text-[#000]">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-[#6358dc]">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}