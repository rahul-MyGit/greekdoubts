'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { PencilIcon, CheckIcon, XIcon } from 'lucide-react'

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "Rahul Gujjar",
    jobTitle: "Senior Software Engineer",
    email: "rahul@example.com",
    phone: "9999999999",
    location: "sector 62 noida",
    bio: "Don Don Don Don Don Don Don Don Don Don Don Don Don Don Don"
  })

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    //TODO: add updated logic
  }

  const handleCancel = () => {
    setIsEditing(false)
    //TODO: Reset any changes made
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUserData(prevData => ({ ...prevData, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader className="relative pb-8">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg" />
          <div className="relative flex items-center gap-4 z-10">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold text-white">{userData.name}</CardTitle>
              <p className="text-blue-100">{userData.jobTitle}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className={isEditing ? "bg-white" : "bg-gray-100"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                readOnly={!isEditing}
                className={isEditing ? "bg-white" : "bg-gray-100"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={userData.location}
                onChange={handleChange}
                readOnly={!isEditing}
                className={isEditing ? "bg-white" : "bg-gray-100"}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              readOnly={!isEditing}
              className={`min-h-[100px] ${isEditing ? "bg-white" : "bg-gray-100"}`}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          {!isEditing ? (
            <Button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-600">
              <PencilIcon className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <>
              <Button onClick={handleCancel} variant="outline">
                <XIcon className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                <CheckIcon className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}