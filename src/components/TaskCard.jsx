import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"

export default function TaskCard({ title, description, deadline, priority }) {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-2">Deadline: {deadline}</p>
        <p className="text-xs font-medium mt-1">Priority: {priority}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button size="sm">Mark Done</Button>
      </CardFooter>
    </Card>
  )
}
