import { TouchableOpacity, Text, ImageRequireSource } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ButtonSocialFacebookProps {
    title?: string;
    onPress?: () => void;
}

const PngFacebook: ImageRequireSource = require("../../images/iconfacebook.png");

const ButtonSocialFacebook = ({ title = "Facebook", onPress }: ButtonSocialFacebookProps) => {
    return (
        <TouchableOpacity
            className="flex-row items-center bg-blue-500 border border-gray-300 rounded-md px-4 py-3 w-2/5"
            onPress={onPress}
        >
            <Icon name="facebook" size={20} color="#FFFFFF" />
            <Text className="ml-2 text-white font-semibold">{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonSocialFacebook;