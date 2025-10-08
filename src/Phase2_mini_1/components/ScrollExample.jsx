import React, { useRef } from 'react'

const ScrollExample = () => {

    const sectionRef = useRef(null)

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div className="p-6 space-y-6">
            <h2 className="text-xl font-bold mb-3">🧭 Scroll to Section Example</h2>

            <button
                onClick={scrollToSection}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Scroll to Section 👇
            </button>

            <div style={{ height: "100vh" }}></div> {/* Fake space */}

            <div
                ref={sectionRef}
                className="h-64 bg-green-200 flex items-center justify-center text-xl font-bold rounded-md"
            >
                🎯 You scrolled to this section!
            </div>
        </div>
    )
}

export default ScrollExample