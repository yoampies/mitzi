import React from 'react'
import Card from './Card'

export default function Blog() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div>
                <div className="@container">
                    <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end p-4"
                        style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://thumbs.dreamstime.com/b/psychotherapy-concept-depressed-black-man-talking-to-psychologist-individual-therapy-therapist-advising-something-195718759.jpg")',
                        }}
                    >
                        <div className="flex flex-col gap-2 px-10 pb-10">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                Welcome to Mimi's Musings
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                            This is a space for those who are curious about mental health and personal growth. I'm Mimi, a licensed therapist, and I'm here to help you navigate the complexities of life. Read on for stories, insights, and musings about mental health, relationships, and self-discovery.
                            </h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto py-12 px-6">
                    <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                        <div className="space-y-8">
                        <Card
                            title="How to set boundaries with family"
                            description="Boundaries are essential for healthy relationships. Here's how to set them with your family."
                            time="Mimi's Musings · 3 min read"
                            imgSrc="https://static.vecteezy.com/system/resources/thumbnails/002/779/420/small_2x/online-therapy-and-counselling-under-stress-and-depression-young-woman-psychotherapist-supports-female-with-psychological-problems-illustration-vector.jpg" 
                        />
                        <Card
                            title="What is emotional intelligence?"
                            description="Emotional intelligence is the ability to understand and manage your emotions. Here's what you need to know."
                            time="Mimi's Musings · 4 min read"
                            imgSrc="https://img.freepik.com/free-vector/online-therapy-abstract-concept-illustration-online-counseling-mental-health-amid-coronavirus-quarantine-psychological-help-self-isolation-social-distancing_335657-1067.jpg" 
                        />
                    </div>

                    <h2 className="text-2xl font-bold mt-12 mb-6">Latest Articles</h2>

                    <div className="space-y-8">
                        <Card
                            title="The power of vulnerability"
                            description="Vulnerability is the key to deep connections and personal growth. Here’s why it’s worth embracing."
                            time="Mimi's Musings · 2 min read"
                            imgSrc="https://i.pinimg.com/originals/8c/ac/9c/8cac9c208b36343a88e3ee43c7c5cecb.png" 
                        />
                        <Card
                            title="Understanding attachment styles"
                            description="Attachment styles are patterns of relating to others. Here’s how they impact your relationships."
                            time="Mimi's Musings · 3 min read"
                            imgSrc="https://png.pngtree.com/png-clipart/20230824/original/pngtree-online-therapy-abstract-concept-vector-illustration-picture-image_8407651.png" 
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}
