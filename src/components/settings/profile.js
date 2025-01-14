
import InputField from "./InputField";

export default function Profile () {

    const handleInputChange = (e) => {
        const { name, target } = e.target;
        dispatchEvent({
            type: 'UPDATE_PROFILE',
            payload: { [name]: value }
        });
    }
    const handleSave = () => {
        dispatch ({ type: 'SAVE_PROFILE', payload: profile });
    };

    return (
        <div className="flex-1 p-8">
            <h1 className="text-2xl font-semibold mb-8">Set up Profile</h1>
            <div className="max-w-2xl">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            <img
                                src="/future.jpeg"
                                alt= "Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute buttom-0 right-0 w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                            <span className="text-lg">Boom</span>
                        </button>
                    </div>
                </div>
                {/* <form className="space-y-4">
                    <InputField
                        label="Surname"
                        name="surname"
                        value={profile.surname}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="First Name"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        value={profile.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSave}
                        className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Save
                    </button>
                </form> */}
            </div>
        </div>
    )
}