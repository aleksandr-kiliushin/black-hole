import { baseAxiosInstance } from '@api/baseAxiosInstance';

class OAuthApi {
  private readonly redirectUri: string;

  constructor() {
    this.redirectUri = window.location.origin;
  }

  public async getId(): Promise<string> {
    const response = await baseAxiosInstance.get('/oauth/yandex/service-id', {
      params: {
        redirect_uri: this.redirectUri,
      },
    });

    const { service_id: id } = response.data;

    return id;
  }

  public async getAccessToken(code: string): Promise<void> {
    await baseAxiosInstance.post('/oauth/yandex', {
      redirect_uri: this.redirectUri,
      code,
    });
  }
}

export const oAuthApi = new OAuthApi();
