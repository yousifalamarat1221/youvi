"use client"

import { useState } from "react"
import fs from "fs"
import path from "path"

export default function AddMemberPage() {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [videoId, setVideoId] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch("/api/add-member", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, name, videoId })
    })

    const result = await res.json()
    setMessage(result.message || "تم الحفظ")
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-green-700">➕ إضافة عضو جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded p-6">
        <div>
          <label className="block mb-1">اسم المستخدم (ref)</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">الاسم الكامل</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1">كود فيديو YouTube</label>
          <input value={videoId} onChange={(e) => setVideoId(e.target.value)} className="w-full border p-2 rounded" required />
        </div>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          حفظ العضو
        </button>
        {message && <p className="text-center text-sm text-blue-600 mt-4">{message}</p>}
      </form>
    </div>
  )
}