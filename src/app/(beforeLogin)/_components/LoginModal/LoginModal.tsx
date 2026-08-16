"use client";

import { ChangeEventHandler, MouseEventHandler, SubmitEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import IconClose from "../IconClose";

import styles from "./LoginModal.module.css";

export default function LoginModal() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const router = useRouter();

  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  }

  const handleIdChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = () => {};

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = () => {};

  const onSubmit: SubmitEventHandler<HTMLFormElement> = () => {};

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={handleCloseClick}>
            <IconClose />
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.modalBody}>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="id">아이디</label>
              <input id="id" className={styles.input} value={id} onChange={handleIdChange} type="text" placeholder=""/>
            </div>
            <div className={styles.inputDiv}>
              <label className={styles.inputLabel} htmlFor="password">비밀번호</label>
              <input id="password" className={styles.input} value={password} onChange={handlePasswordChange} type="password" placeholder=""/>
            </div>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.modalFooter}>
            <button className={styles.actionButton} disabled={!id && !password}>로그인하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
