import datetime
import typing as t
from dataclasses import dataclass


@dataclass
class Person:
    """A class based representation of a Person

    :param addr: The person's address
    :param first_name: The person's first_name
    :param last_name: The person's last_name
    :param middle_name: The person's middle_name
    :param birthdate: The person's birthdate
    """

    addr: str
    first_name: str
    last_name: str
    middle_name: t.Optional[str]
    birthdate: datetime.datetime

    @property
    def current_age(self) -> int:
        """
        Calculate a Person's current age
        """
        return datetime.datetime.today().year - self.birthdate.year

    def get_formal_name(self) -> str:
        """
        Return a Person's formal name
        """
        if self.middle_name is None:
            full_name = f"{self.first_name} {self.last_name}".title()
        else:
            full_name = f"{self.first_name} {self.middle_name} {self.last_name}".title()
        return full_name

    def send_message(self, message: str) -> None:
        """
        Send something to the person

        :param message: The message to send
        """
        ...
