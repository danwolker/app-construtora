import { TouchableOpacity, Text, Image } from "react-native";
import { ImageRequireSource } from "react-native";

interface ButtonSocialGoogleProps {
    title?: string;
    onPress?: () => void;
}

const PngGoogle: ImageRequireSource = require("../../images/icongoogle.png");

const ButtonSocialGoogle = ({ title = "Google", onPress }: ButtonSocialGoogleProps) => {
    return (
        <TouchableOpacity
            className="flex-row items-center bg-white border border-gray-300 rounded-md px-4 py-3 w-2/5"
            onPress={onPress}
        >
            <Image
                source={PngGoogle}
                style={{ width: 20, height: 20 }}
            />
            <Text className="ml-2 text-gray-800 font-semibold">{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSocialGoogle;