import { tokenRepository } from '../../../lib/api/instance';
import { authService } from '@lib/api/instance';
import { NextApiHandler } from 'next';
import { User } from 'types/user';

const COOKIE_EXPIRATION_TIME = 3600;

const handleLogin: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const loginResponse = await authService.login(email, password);
    const accessToken = loginResponse.headers['accessToken']!;
    const refreshToken = loginResponse.headers['refreshToken']!;
    tokenRepository.saveToken(accessToken, refreshToken, {
      // FIXME: 쿠키 서버에서 설정? 옵션 서버에서 해주면 없어도됨.
      httpOnly: true,
      secure: true,
      maxAge: COOKIE_EXPIRATION_TIME,
      path: '/'
    });
    const { nickname, profileImg } = loginResponse.data;
    res.status(200).json({
      nickname,
      profileImg
    });
  } catch (err) {
    res.status(401).end();
  }
};
