"use client";

import { useFormContext } from "@/context/formContext";

export default function Features() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      features: { ...formData.features, [name]: value },
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Features</h2>
      <form className="flex justify-between">
        {/* Column 01 */}
        <div className="col1 flex flex-col gap-y-5">
          {/* Air Conditioning Checkbox */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="airConditioning"
              checked={formData.features.airConditioning || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    airConditioning: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-1 border-gray-100 rounded-xl focus:bg-red-100"
            />
            <span className="text-gray-700 text-lg">Air Conditioning</span>
          </label>

          {/* Sunroof Checkbox */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="sunroof"
              checked={formData.features.sunroof || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: { ...formData.features, sunroof: e.target.checked },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2 "
            />
            <span className="text-gray-700 text-lg">Sunroof</span>
          </label>

          {/* Navigation System Checkbox */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="navigationSystem"
              checked={formData.features.navigationSystem || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    navigationSystem: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Navigation System</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="bluetooth"
              checked={formData.features.bluetooth || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    bluetooth: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Bluetooth</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="heatedSeat"
              checked={formData.features.heatedSeat || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    heatedSeat: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Heated Seats</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="bakupcamera"
              checked={formData.features.bakupcamera || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    bakupcamera: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Backup Camera</span>
          </label>
        </div>

        {/* column 02 */}

        <div className="col1 flex flex-col gap-y-5">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="laneAssist"
              checked={formData.features.laneAssist || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    laneAssist: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Lane Assist</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="parkingSensors"
              checked={formData.features.parkingSensors || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    parkingSensors: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Parking Sensors</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="cruiseControl"
              checked={formData.features.cruiseControl || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    cruiseControl: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Cruise Control</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="blindSpotMonitoring"
              checked={formData.features.blindSpotMonitoring || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    blindSpotMonitoring: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Blind Spot Monitoring</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="rearCrossTrafficAlert"
              checked={formData.features.rearCrossTrafficAlert || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    rearCrossTrafficAlert: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">
              Rear Cross Traffic Alert
            </span>
          </label>
        </div>

        <div className="col2 flex flex-col gap-y-5">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="appleCarPlayAndroidAuto"
              checked={formData.features.appleCarPlayAndroidAuto || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    appleCarPlayAndroidAuto: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">
              Apple CarPlay / Android Auto
            </span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="remoteStart"
              checked={formData.features.remoteStart || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    remoteStart: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Remote Start</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="heatedSteeringWheel"
              checked={formData.features.heatedSteeringWheel || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    heatedSteeringWheel: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Heated Steering Wheel</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="towPackage"
              checked={formData.features.towPackage || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    towPackage: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Tow Package</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="adaptiveHeadlights"
              checked={formData.features.adaptiveHeadlights || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    adaptiveHeadlights: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Adaptive Headlights</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="wirelessCharging"
              checked={formData.features.wirelessCharging || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    wirelessCharging: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Wireless Charging</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="powerSeats"
              checked={formData.features.powerSeats || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    powerSeats: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Power Seats</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="powerLiftgate"
              checked={formData.features.powerLiftgate || false}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  features: {
                    ...formData.features,
                    powerLiftgate: e.target.checked,
                  },
                })
              }
              className="w-6 h-6 border-2 border-gray-300 rounded-lg focus:ring-2"
            />
            <span className="text-gray-700 text-lg">Power Liftgate</span>
          </label>
        </div>
      </form>
    </div>
  );
}
