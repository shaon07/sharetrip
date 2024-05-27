import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
   <div className="bg-gray-light">
    <RootLayout>
      <HomePage />
    </RootLayout>
   </div>
  )
}