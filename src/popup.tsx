import packageJson from "../package.json";

import "./style.css";

import { AuthForm } from "~components/popup/AuthForm";
import { Contact } from "~components/popup/Contact";
import { ErrorMessage } from "~components/popup/ErrorMessage";
import { Header } from "~components/popup/Header";
import { Hint } from "~components/popup/Hint";
import { SearchForm } from "~components/popup/SearchForm";
import { useAuth } from "~hooks/useAuth";
import { useSearch } from "~hooks/useSearch";

function IndexPopup() {
  const {
    isLoading: isAuthLoading,
    password,
    setPassword,
    identifier,
    domain,
    setDomain,
    setIdentifier,
    authFactorToken,
    setAuthFactorToken,
    isShowAuthFactorTokenInput,
    errorMessage: authMessage,
    isAuthenticated,
    isAuthenticatedLoading,
    login,
    logout,
    displayName,
    avatar,
  } = useAuth();

  const {
    isLoading: isSearchLoading,
    errorMessage: searchMessage,
    searchBskyUser,
  } = useSearch();

  const message = authMessage || searchMessage;
  const isShowErrorMessage = !!message;

  return (
    <div className="px-5 pt-3 pb-4 w-[380px]">
      <Header version={packageJson.version} />
      {isAuthenticatedLoading ? (
        <div className="flex justify-center items-center mt-5">
          <span className="loading loading-spinner loading-sm" />
        </div>
      ) : !isAuthenticated ? (
        <AuthForm
          isLoading={isAuthLoading}
          password={password}
          setPassword={setPassword}
          domain={domain}
          setDomain={setDomain}
          identifier={identifier}
          setIdentifier={setIdentifier}
          authFactorToken={authFactorToken}
          setAuthFactorToken={setAuthFactorToken}
          isShowAuthFactorTokenInput={isShowAuthFactorTokenInput}
          onSubmit={login}
        />
      ) : (
        <SearchForm
          isLoading={isSearchLoading}
          displayName={displayName}
          avatar={avatar}
          onSubmit={searchBskyUser}
          onLogout={logout}
        />
      )}
      {isShowErrorMessage && message && (
        <ErrorMessage
          message={message.message}
          documentLink={message.documentLink}
        />
      )}
      <div className="flex flex-col gap-2 mt-4">
        {isAuthenticated && <Hint />}
        <Contact />
      </div>
    </div>
  );
}

export default IndexPopup;
