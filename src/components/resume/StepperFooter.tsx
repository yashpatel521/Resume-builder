import { useStepper } from "@/components/ui/stepper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const StepperFooter = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? (
                <Link href="/resume/preview">Preview Resume</Link>
              ) : isOptionalStep ? (
                "Skip"
              ) : (
                "Next"
              )}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
export default StepperFooter;
