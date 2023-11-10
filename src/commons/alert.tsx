import { XCircleIcon } from "@heroicons/react/24/outline";

function Alert({
  alert,
  toggleAlert,
}: {
  alert: AlertOptionsType;
  toggleAlert: () => void;
}) {
  if (alert.active) {
    setTimeout(() => {
      toggleAlert();
    }, 5000);
  }

  return (
    <>
      {alert?.active && (
        <div className="bg-green-100 text-green-800 p-5 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">
              {alert.message}
            </div>
            <button type="button">
              <XCircleIcon
                className="w-6 h-6 text-gray-600"
                onClick={toggleAlert}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
