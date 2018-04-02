import { storage } from "utils/core";

export default
{
    getTimestamp()
    {
        return (Date.parse(new Date()) / 1000).toString();
    },

    getSign(params, timestamp)
    {
        return timestamp;
    },

    getStorageKey(key)
    {
        return "fw_drip_wechat_user_"  + key;
    },

    // 设置本地凭证信息。
    setCredential(credential)
    {
        storage.set(this.getStorageKey("credential"), credential);
    },

    // 当前本地凭证信息。
    getCredential()
    {
        return storage.get(this.getStorageKey("credential"));
    },

    // 清空当前本地凭证信息。
    clearCredential()
    {
        storage.remove(this.getStorageKey("credential"));
    },

    // 当前用户信息。
    currentUser()
    {
        let credential = this.getCredential();

        if(credential != null)
        {
            return credential.User;
        }

        return null;
    },

    // 设置当前用户信息。
    setUser(user)
    {
        let credential = this.getCredential();

        credential.User = user;

        this.setCredential(credential);
    },

    // 当前本地凭证Id。
    credentialId()
    {
        let credential = this.getCredential();

        if(credential != null)
        {
            return credential.CredentialId;
        }

        return null;
    }
};
