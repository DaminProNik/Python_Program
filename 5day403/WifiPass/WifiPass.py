import subprocess

def get_wifi_passwords():
    # Run the command to get the list of Wi-Fi profiles
    profiles_data = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles']).decode('utf-8', errors="backslashreplace").split('\n')
    
    profiles = [i.split(":")[1].strip() for i in profiles_data if "All User Profile" in i]
    
    wifi_passwords = {}
    
    for profile in profiles:
        # Run the command to get the password for each profile
        profile_info = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', profile, 'key=clear']).decode('utf-8', errors="backslashreplace").split('\n')
        
        password = "None"
        for line in profile_info:
            if "Key Content" in line:
                password = line.split(":", 1)[1].strip()
                break
        
        wifi_passwords[profile] = password
    
    return wifi_passwords

if __name__ == "__main__":
    passwords = get_wifi_passwords()
    for profile, password in passwords.items():
        print(f"Profile: {profile}, Password: {password}")