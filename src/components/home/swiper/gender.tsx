import React from 'react'

const Gender: React.FC = () => {
  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center mt-6">
          <div className="text-gray-600 text-2xl">
            <i className="fas fa-infinity"></i>
          </div>
          <h1 className="text-3xl font-semibold mt-2">请选择你的性别</h1>
          <p className="text-gray-500 mt-2">注册成功后不可更改</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <img
              alt="Illustration of a girl"
              className="rounded-full"
              height="100"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bPxYzl3scJOnAm1gNz87jD4g/user-J1G3ILc1ZIqay44FXSxUp16W/img-rXUtCrujuzxC4Nle9oA7Wndt.png?st=2024-01-20T12%3A10%3A19Z&amp;se=2024-01-20T14%3A10%3A19Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-19T19%3A37%3A55Z&amp;ske=2024-01-20T19%3A37%3A55Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=jZuSITRi96yJx5F8i0CAHGJFIS2jdlwnFW%2B4NI3za%2Bs%3D"
              width="100"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium">女生</h2>
              <p className="text-gray-500">Girl</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex items-center">
            <img
              alt="Illustration of a boy"
              className="rounded-full"
              height="100"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bPxYzl3scJOnAm1gNz87jD4g/user-J1G3ILc1ZIqay44FXSxUp16W/img-YFE7qavNhliWnmyufV3ns5B2.png?st=2024-01-20T12%3A10%3A18Z&amp;se=2024-01-20T14%3A10%3A18Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-19T19%3A35%3A07Z&amp;ske=2024-01-20T19%3A35%3A07Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=ul6Hhx0CJxXZpYaNj0qAOmg6t19GXAku04Uh7lAOv38%3D"
              width="100"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium">男生</h2>
              <p className="text-gray-500">Boy</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="rounded-full bg-blue-400 p-4">
            <i className="fas fa-arrow-right text-white"></i>
          </div>
        </div>
      </div>
      <div className="h-16 bg-black mt-8"></div>
    </div>
  )
}

export default Gender
