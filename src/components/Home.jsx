import React from 'react'

export default function Home() {
  return (
    <div>
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="container">
                <div className="@[480px]:p-4">
                    <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-10 pb-10"
                    style={{
                        backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/14f817bc-bfbc-4cf7-97d0-0023bec770fe.png")',
                    }}
                    >
                        <div className="flex flex-col gap-2 text-left">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            Guidance for personal growth
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            Our therapists are here to help you navigate life's challenges and opportunities. Find the right guidance for you.
                            </h2>
                        </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ff327d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                <span className="truncate">Schedule a free consultation</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 px-4 py-10 @container">
                    <h1 className="text-[#181013] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                        How it works
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}
