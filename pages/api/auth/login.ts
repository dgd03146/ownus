import { tokenRepository } from '../../../lib/api/instance';
import { TokenService } from '@services/tokenService';
import { authService } from '@lib/api/instance';
import { NextApiHandler } from 'next';
import { LoginResponse } from 'types/user';

const handleLogin: NextApiHandler<LoginResponse> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const { nickname, profileImg, accessToken } = await authService.login(
      email,
      password
    );
    // 토큰 저장 하고 값 반환
    tokenRepository.saveToken(accessToken, {
      httpOnly: true,
      maxAge: 3600,
      secure: true
    });
    res.status(200).json({
      nickname,
      profileImg
    });
  } catch (err) {
    res.status(401).end();
  }
};

// api/

// react query에서 api/

//
