import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { Button, Label } from 'app/components/shared';

interface Props {
  placeholder?: string;
  onChange: (title: string) => void;
}

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 8px 0;
`;

const SearchFilter = styled.input`
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin: 0 18px 0 0;
  width: 300px;
  font-size: 16px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  height: 48px;
  border: 0;
  border-radius: 4px;
  color: inherit;
  padding: 6px;
`;

export const SearchInput: FC<Props> = ({ placeholder, onChange }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const title = event.currentTarget.value.trim();
      if (event.which === 13) {
        onChange(title);
        setInputText('');
      }
    },
    [onChange, setInputText]
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const title = event.target.value.trim();
      onChange(title)
      setInputText(title);
    },
    [onChange, setInputText]
  );

  const handleReset = React.useCallback(
    (event: React.MouseEventHandler<HTMLButtonElement>) => {
      onChange('')
      setInputText('');
    },
    [onChange, setInputText]
  );

  return (
    <Fragment>
      <Label htmlFor="search-filter" margin="24px 0">FILTER</Label>

      <FilterRow>
        <SearchFilter
          id="search-filter"
          type="text"
          autoFocus
          placeholder={placeholder}
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
        <Button text="Reset" onClick={handleReset} />
      </FilterRow>
    </Fragment>
  );
};
