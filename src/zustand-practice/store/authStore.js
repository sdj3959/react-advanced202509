import {create} from "zustand";
import {persist} from "zustand/middleware";

// 인증 관련 상태값 중앙 관리 저장소 생성
export const useAuthStore = create(
  persist((set) => ({

    // 관리할 상태값
    isLoggedIn: false,

    // 상태변경 함수 (액션함수)
    login: () => set(() => ({ isLoggedIn: true })),
    logout: () => set(() => ({ isLoggedIn: false })),
  }),
    {
      name: 'auth', // 로컬스토리지에 저장될 키 이름
      // 절대 민감정보 (ex - token) 로컬스토리지에 저장하지 말것
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn }), // 로컬스토리지에 저장할 상태값 지정
    })
);