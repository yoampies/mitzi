import React from 'react'

export default function Contact() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div>
                <div className="@container">
                    <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-10 pb-10"
                        style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/89d2f2a2-f217-45e2-9d55-9706e8d80183.png")',
                        }}
                    >
                        <div className="flex flex-col gap-2">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            Welcome to Mimi's Therapy
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            I offer a warm, empathetic, non-judgmental space for you to explore whatever is on your mind. I have extensive experience working with individuals,
                            couples, and families.
                        </h2>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ff327d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                            <span className="truncate">Schedule an appointment</span>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="p-4 @container">
                    <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#e7dadf] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
                        <div className="flex flex-col gap-1">
                        <p className="text-[#181013] text-base font-bold leading-tight">Interested in therapy?</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">
                            I offer a free 15-minute phone consultation to see if we are a good fit. Feel free to contact me for any questions or to schedule an appointment.
                        </p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#ff327d] text-white text-sm font-medium leading-normal">
                        <span className="truncate">Contact Me</span>
                        </button>
                    </div>
                    </div>
                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services Offered</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#e7dadf] bg-white p-4 flex-col">
                        <div className="text-[#181013]" data-icon="Users" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                            d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm211.53,87.61a95.83,95.83,0,0,0-47.22-37.71,60,60,0,1,0-66.5,0,95.83,95.83,0,0,0-47.22,37.71,8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74ZM180,152a44,44,0,1,1,44-44A44.05,44.05,0,0,1,180,152Z"
                            ></path>
                        </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                        <p className="text-[#181013] text-lg font-bold leading-tight">Individual Therapy</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">
                            I provide a safe and supportive space to help you explore your thoughts, feelings, and behaviors.
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#e7dadf] bg-white p-4 flex-col">
                        <div className="text-[#181013]" data-icon="HandsClapping" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                            d="M240.12,92.23a8,8,0,0,0-11.36-1.85L205.41,110.7a8,8,0,1,0,9.51,12.85l23.36-17.63A8,8,0,0,0,240.12,92.23Zm-136,106.14-13.94-19.54a8,8,0,0,0-13.06,9.18l13.95,19.54a8,8,0,0,0,13.06-9.18Zm30.59-11.3a8,8,0,0,0-11.29,1.85l-15,21a8,8,0,0,0,13.12,9.44l15-21A8,8,0,0,0,134.73,187.07ZM253.66,124.1a8,8,0,0,0-11.36-1.85l-23.36,17.63a8,8,0,1,0,9.51,12.85l23.36-17.63A8,8,0,0,0,253.66,124.1ZM181,220a8,8,0,0,0-11.1-2.11l-18.71,12.89a8,8,0,0,0,8.9,13.21L178.8,231.1A8,8,0,0,0,181,220ZM160,176a8,8,0,0,0,8-8V152a8,8,0,0,0-16,0v16A8,8,0,0,0,160,176Zm68.09,39.47-10.88-25.39a8,8,0,1,0-14.78,6.33l10.88,25.39a8,8,0,1,0,14.78-6.33ZM81.25,112a7.91,7.91,0,0,0,5.66-2.34L109.61,87a8,8,0,0,0-11.32-11.31L75.6,98.34a8,8,0,0,0,5.65,13.66Zm7.75,28a8,8,0,0,0,11.32-11.31L70.61,98.34a8,8,0,0,0-11.32,11.31Zm56-54a7.91,7.91,0,0,0,5.66-2.34l22.7-22.7a8,8,0,0,0-11.32-11.31L139.61,72.34a8,8,0,0,0,5.65,13.66Zm-40.58,71.12L99.47,160.1a8,8,0,0,0,13.06-9.18L117,131.37a8,8,0,1,0-13.06-9.18l-4.44,6.22A8,8,0,1,0,104.42,157.1ZM231.07,79.34a7.91,7.91,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.31l-8,8a8,8,0,0,0,5.65,13.66Zm-17.25-17.25a8,8,0,0,0,11.32-11.31l-16-16a8,8,0,0,0-11.32,11.31Zm-40-8a8,8,0,0,0,5.65-13.66l-8-8a8,8,0,1,0-11.32,11.31l8,8A7.91,7.91,0,0,0,173.83,54.09Zm-25.71,59.2a8,8,0,0,0-14.08,0L106,161.37a8,8,0,0,0,13.06,9.18L147.1,122.47A8,8,0,0,0,148.12,113.29Z"
                            ></path>
                        </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                        <p className="text-[#181013] text-lg font-bold leading-tight">Couples Therapy</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">
                            Helping couples enhance communication, resolve conflicts, and strengthen their relationships.
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#e7dadf] bg-white p-4 flex-col">
                        <div className="text-[#181013]" data-icon="ChatsCircle" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                            d="M128,24A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm0,192a87.35,87.35,0,0,1-41.93-10.43A7.94,7.94,0,0,0,82.2,204.2a8.3,8.3,0,0,1,1.24,7.14,83.88,83.88,0,0,1-6.7,18.59,1.84,1.84,0,0,1-1.55,1.07,1.91,1.91,0,0,1-.55-.1,1.86,1.86,0,0,1-1.29-1.78v-.23a87.74,87.74,0,0,1,2.34-23.09,87.5,87.5,0,0,1-21.11-19.73A87.92,87.92,0,0,1,40,128a88,88,0,1,1,88,88Z"
                            ></path>
                        </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                        <p className="text-[#181013] text-lg font-bold leading-tight">Family Therapy</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">
                            Supporting families to improve communication, address conflicts, and navigate life transitions together.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">About Mimi</h2>
                    <div className="flex flex-1 gap-3 rounded-lg border border-[#e7dadf] bg-white p-4">
                        <div className="flex flex-col gap-2">
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">I am a licensed therapist with over 10 years of experience helping individuals, couples, and families.</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">My approach is warm, compassionate, and tailored to meet each client's unique needs.</p>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">Together, we will work to understand your challenges and develop strategies for positive change.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center">
                        <div className="text-[#8d5e6f]" data-icon="EnvelopeSimple" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                            d="M128,32A96,96,0,1,0,224,128,96.11,96.11,0,0,0,128,32Zm46.59,99.88-40,32a8,8,0,0,1-10.53,0l-40-32a8,8,0,1,1,10.53-12.76L128,140.67l34.24-27.55a8,8,0,0,1,10.53,12.76Z"
                            ></path>
                        </svg>
                        </div>
                        <p className="text-[#8d5e6f] text-base font-normal leading-normal">info@mimi.com</p>
                    </div>
                </div>
                <div className="bg-[#f9f4f6] p-4">
                    <h3 className="text-[#8d5e6f] text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Contact Me</h3>
                    <form>
                        <div className="flex flex-col gap-3">
                        <input className="p-3 border border-[#e7dadf] rounded-lg" type="text" placeholder="Your Name" required />
                        <input className="p-3 border border-[#e7dadf] rounded-lg" type="email" placeholder="Your Email" required />
                        <textarea className="p-3 border border-[#e7dadf] rounded-lg" placeholder="Your Message" rows="5" required></textarea>
                        <button className="p-3 bg-[#8d5e6f] text-white rounded-lg" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}