"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { FileUpload } from "@/components/file-upload"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TextFormatGuide } from "@/components/text-format-guide"
import { QuestionnaireViewer } from "@/components/questionnaire-viewer"

import { parseQuestionnaire } from "@/lib/parser"

import { Section } from "@/lib/types"

import { SAMPLE_TEXT } from "@/lib/constants"

const QuestionnaireApp = () => {
  const [questionnaire, setQuestionnaire] = useState<Section[] | null>(null)
  const [error, setError] = useState<string>("")
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false)

  const handleFileLoaded = (content: string) => {
    try {
      const parsed = parseQuestionnaire(content)
      console.log(parsed)
      setQuestionnaire(parsed)
      setError("")
      setIsPreviewMode(true)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const loadSample = (): void => {
    try {
      const parsed = parseQuestionnaire(SAMPLE_TEXT)
      console.log(parsed)
      setQuestionnaire(parsed)
      setError("")
      setIsPreviewMode(true)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  if (isPreviewMode && questionnaire) {
    return <QuestionnaireViewer questionnaire={questionnaire} />
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* App Title */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">QST</h1>
        <p className="text-lg text-muted-foreground">Quick Survey Tester</p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <FileUpload onFileLoaded={handleFileLoaded} onError={setError} />

        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-border"></div>
          <span className="text-muted-foreground text-sm">OR</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Try Sample Questionnaire</h3>
          <Button onClick={loadSample} variant="outline" className="w-full">
            Load Sample Questionnaire
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <TextFormatGuide sampleText={SAMPLE_TEXT} />
      </div>
    </div>
  )
}

export default QuestionnaireApp
