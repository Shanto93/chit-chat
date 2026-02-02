import { useState } from 'react';

const JoinRoomForm = () => {
    const [formData, setFormData] = useState({ name: '', roomId: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Joining Room:", formData);
        // Add your logic to connect to the socket or API here
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Enter your details to join the session</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Display Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='e.g. John Doe'
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Room ID Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Room ID</label>
                        <input
                            type="text"
                            name="roomId"
                            value={formData.roomId}
                            onChange={handleChange}
                            placeholder='e.g. ROOM-123'
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transform active:scale-[0.98] transition-all"
                    >
                        Join Room
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JoinRoomForm;