"use client";

import { ChangeEventHandler, MouseEventHandler, SubmitEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import IconClose from "../IconClose";

import styles from "./SignupModal.module.css";

const SignupModal = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const onClickClose: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  }

  const handleIdChang: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (e) => {
    setId(e.currentTarget.value)
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value)
  };
  const handleNicknameChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (e) => {
    setNickname(e.currentTarget.value)
  };
  const handleImageFileChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (e) => {
    e.currentTarget.files && setImageFile(e.currentTarget.files[0])
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch('http://localhost:9090/api/users', {
      method: 'post',
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: 'include',
    }).then((response: Response) => {
      console.log(response.status);
      if (response.status === 200) {
        router.replace('/home');
      }
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeButton} onClick={onClickClose}>
              <IconClose />
            </button>
            <div>계정을 생성하세요.</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="id">아이디</label>
                <input id="id" className={styles.input} type="text" placeholder=""
                       value={id}
                       onChange={handleIdChang}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" className={styles.input} type="text" placeholder=""
                       value={nickname}
                       onChange={handleNicknameChange}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" className={styles.input} type="password" placeholder=""
                       value={password}
                       onChange={handlePasswordChange}
                />
              </div>
              <div className={styles.inputDiv}>
                <label className={styles.inputLabel} htmlFor="image">프로필</label>
                <input id="image" className={styles.input} type="file" accept="image/*"
                       onChange={handleImageFileChange}
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.actionButton} disabled>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>)
};

export default SignupModal;
