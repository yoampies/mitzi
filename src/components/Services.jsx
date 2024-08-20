import React from 'react'

export default function Services() {
    const services = [
        {
          title: 'Anxiety',
          description: 'Find relief from racing thoughts and constant worry.',
          image: 'https://cdn.usegalileo.ai/sdxl10/d5e91a35-c7d4-4cf2-9724-49a7c54a94fc.png',
        },
        {
          title: 'Depression',
          description: 'Learn to manage symptoms and find hope for the future.',
          image: 'https://cdn.usegalileo.ai/sdxl10/6916f256-87b1-48ed-a73d-b76c9ece2a6f.png',
        },
        {
          title: 'Relationships',
          description: 'Work through issues with a partner, friend, or family member.',
          image: 'https://cdn.usegalileo.ai/stability/460cff7a-7f33-42fd-bd4e-d33faaf5deb3.png',
        },
      ];

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div>
                <div className="@container">
                    <div className="@[480px]:px-4 @[480px]:py-3">
                        <div
                        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
                        style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/fc838aeb-eb41-47b3-aa90-e60d8e37881f.png")` }}
                        ></div>
                    </div>
                </div>

                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Personal Therapy</h2>
                    <p className="text-[#181013] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    You deserve to feel good. Get matched with a therapist who understands you and your needs.
                    </p>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    {services.map((service, index) => (
                        <div className="flex flex-col gap-3 pb-3" key={index}>
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: `url("${service.image}")` }}
                        ></div>
                        <div>
                            <p className="text-[#181013] text-base font-medium leading-normal">{service.title}</p>
                            <p className="text-[#8d5e6f] text-sm font-normal leading-normal">{service.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>

                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Couples Therapy</h2>
                    <p className="text-[#181013] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Strengthen your bond and build a healthier, happier relationship with the help of an experienced couples therapist.
                    </p>

                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Teen Therapy</h2>
                    <p className="text-[#181013] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Give your teen the support they need to navigate the challenges of adolescence and build resilience.
                    </p>

                    <h2 className="text-[#181013] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Family Therapy</h2>
                    <p className="text-[#181013] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Work together to improve communication, resolve conflicts, and strengthen your family relationships.
                    </p>
                </div>
        </div>
    </div>
  )
}
