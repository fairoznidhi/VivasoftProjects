import {useState, useEffect} from "react"
import {cn} from "@/lib/utils"
import SpinnerIcon from "@assets/SpinnerIcon.tsx";
import CheckIcon from "@assets/CheckIcon.tsx";
import {loaderSteps, LOADER_STATUSES} from "@/constants/loaderSteps";
import {getStepStatus} from '@/utils/getStepStatus';
import DummyLoaderIcon from "@assets/DummyLoaderIcon.tsx";

export default function MultiStepLoader() {
    const [currentStep, setCurrentStep] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev < 5) {
                    return prev + 1
                } else {
                    clearInterval(interval)
                    return 5
                }
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="max-w-fit rounded-2xl mx-auto p-6 space-y-6 bg-gradient-to-b from-[#F8FAFC] to-[#F8FAFC]">
                {loaderSteps.map((step) => {
                    const status = getStepStatus(step.id, currentStep)

                    return (
                        <div key={step.id} className={cn("flex gap-2 items-center",
                            status === "pending" && "opacity-30",
                        )}>
                            <div className={cn(
                                "flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
                                status === LOADER_STATUSES.COMPLETED && "bg-green-50",
                                status === LOADER_STATUSES.ACTIVE && "bg-neutral-50",
                                status === LOADER_STATUSES.PENDING && "bg-neutral-50"
                            )}>
                                {status === "completed" && (
                                    <CheckIcon className="w-6 h-6 text-green-600"/>
                                )}
                                {status === "active" && (
                                    <SpinnerIcon className="w-5 h-5 text-gray-600 animate-spin"/>
                                )}
                                {status === "pending" && (
                                    <SpinnerIcon className="w-5 h-5 text-gray-600"/>
                                )}
                            </div>

                            <h3 className="flex-1 text-base font-medium leading-[160%] text-gray-600 text-nowrap">
                                {step.title}
                            </h3>
                        </div>
                    )
                })}
            </div>
            <div className="relative flex items-center justify-center mt-[115px]">
                <DummyLoaderIcon
                    className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]"/>
                <div className='absolute h-[1px] w-screen bg-gradient-to-r from-[#92EAFD] via-[#1071FE] to-[#A79EFA]'/>
            </div>
        </div>
    )
}
